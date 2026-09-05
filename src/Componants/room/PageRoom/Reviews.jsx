import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faCircleUser } from '@fortawesome/free-solid-svg-icons'
import Button from '../../Layout/Button/Button'
import { testimonials } from '../../../assets/assets/assets'

function Stars({ rating = 0, onSelect }) {
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((value) => (
                <FontAwesomeIcon
                    key={value}
                    icon={faStar}
                    className={`${value <= rating ? 'text-amber-300' : 'text-gray-200'} ${onSelect ? 'cursor-pointer' : ''}`}
                    onClick={() => onSelect?.(value)}
                />
            ))}
        </div>
    )
}

function Reviews({ rating = 0, reviewCount = 0, items = testimonials }) {
    const [list, setList] = useState(items)
    const [name, setName] = useState(localStorage.getItem('token') ? JSON.parse(localStorage.getItem('user')).username : '')
    const [comment, setComment] = useState('')
    const [userRating, setUserRating] = useState(5)

    function submitReview() {
        if (!name.trim() || !comment.trim()) return
        setList((prev) => [
            {
                id: Date.now(),
                name: name.trim(),
                address: 'Guest',
                image: '',
                rating: userRating,
                review: comment.trim(),
            },
            ...prev,
        ])
        setName('')
        setComment('')
        setUserRating(5)
    }

    return (
        <section id="reviews" className="w-full space-y-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Reviews</h2>
                    <p className="text-gray-500">What guests say about this room</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">{rating}</span>
                    <FontAwesomeIcon icon={faStar} className="text-amber-300" />
                    <span className="text-gray-500">({reviewCount} reviews)</span>
                </div>
            </div>

            <div className="space-y-4">
                {list.length > 0 ? (
                    list.map((item) => (
                        <article
                            key={item.id}
                            className="flex gap-4 items-start rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                        >
                            {
                                item?.image==''?<img
                                src={item.image}
                                alt={item.name}
                                className="h-12 w-12 rounded-full object-cover"
                            />:<FontAwesomeIcon className='text-4xl' icon={faCircleUser}/>
                            }
                            <div className="flex-1 space-y-1">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                        <p className="text-sm text-gray-500">{item.address}</p>
                                    </div>
                                    <Stars rating={item.rating} />
                                </div>
                                <p className="text-gray-700">{item.review}</p>
                            </div>
                        </article>
                    ))
                ) : (
                    <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center">
                        <h3 className="text-lg font-bold text-gray-800">No reviews yet</h3>
                        <p className="mt-1 text-gray-500">Be the first to review this room.</p>
                    </div>
                )}
            </div>

            <div className="space-y-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="font-bold text-gray-900">Write a review</h3>
                <Stars rating={userRating} onSelect={setUserRating} />
                {
                    localStorage.getItem('token') ? null : (
                    <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 outline-none"
                />)
                }
                <textarea
                    rows={3}
                    placeholder="Share your stay"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 outline-none"
                />
                <Button
                    title="Submit review"
                    handleClick={submitReview}
                    cls="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit"
                />
            </div>
        </section>
    )
}

export default Reviews
