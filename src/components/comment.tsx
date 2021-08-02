import * as React from 'react'
import * as CommentStyles from './comment.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { Images } from '../images'

interface CommentProps {
  title: string,
  comment: string,
  stars: number,
  dateAgo: string,
  image: string,
  response: string
}

const Comment = ({ title, stars, comment, dateAgo, image, response }: CommentProps) => {
  const rating = [];

  for (let i = 0; i < 10; i++) {
    const starred = i < stars
    const star = <FontAwesomeIcon color={starred ? 'gold' : '#5d5d5d'} icon={starred ? faStar : farStar} />
    rating.push(star)
  }

  return (
    <div className={CommentStyles.container}>
      <div className={CommentStyles.imageContainer}>
        <img src={Images[image]} />
      </div>
      <div className={CommentStyles.commentContainer}>
        <span className={CommentStyles.name}>{title}</span>
        <span className={CommentStyles.date}> · {dateAgo}</span>
        <div className={CommentStyles.stars}>
          {rating}
        </div>
        <div className={CommentStyles.comment}>
          <p>{comment}</p>
        </div>
        {
          response &&
          <div className={CommentStyles.responseContainer}>
            <div className={CommentStyles.imageContainerSmall}>
              <img src={Images['igor']} />
            </div>
            <div className={CommentStyles.responseComment}>
              <span className={CommentStyles.name}>Igor Vanian</span>
              <span className={CommentStyles.date}> · {dateAgo}</span>
              <div className={CommentStyles.comment}>
                <p>{response}</p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Comment