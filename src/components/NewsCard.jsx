import React from "react";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    image_url,
    details,
    tags,
    id
  } = news;

  const publishedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-xl rounded-xl">

      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm">{author.name}</h4>
            <p className="text-xs text-gray-500">
              {publishedDate}
            </p>
          </div>
        </div>

        <div className="flex gap-2 text-xl cursor-pointer">
          <span title="Bookmark">🔖</span>
          <span title="Share">🔗</span>
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="text-lg md:text-xl font-bold leading-snug">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={image_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body pt-3">
        <p className="text-sm text-gray-600">
          {details.slice(0, 220)}...
          <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold ml-1 cursor-pointer">
            Read More
          </Link>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-outline">
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-400">
            {"★".repeat(rating.number)}
            {"☆".repeat(5 - rating.number)}
            <span className="text-gray-700 font-semibold ml-1">
              {rating.number}
            </span>

            {rating.badge && (
              <span className="badge badge-warning badge-sm ml-2">
                {rating.badge}
              </span>
            )}
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-gray-600">
            👁 {total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
