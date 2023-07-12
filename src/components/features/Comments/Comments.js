import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Comments.module.scss';

const Comments = () => {
  const [comments] = useState([
    {
      id: 1,
      author: 'John',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      avatar: 'john.jpg',
    },
    {
      id: 2,
      author: 'Jane',
      content:
        'felis. Sed neque arcu, tincidunt eu lorem eget, vehicula dignissim urna.',
      avatar: 'jane.jpg',
    },
    {
      id: 3,
      author: 'Mike',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      avatar: 'mike.jpg',
    },
  ]);

  const [activeComment, setActiveComment] = useState(comments[0].id);
  const [activeCommentData, setActiveCommentData] = useState(comments[0]);

  const handlePageChange = commentId => {
    setActiveComment(commentId);
    const newActiveCommentData = comments.find(comment => comment.id === commentId);
    setActiveCommentData(newActiveCommentData);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.feedback}>
          <div className={styles.header}>
            <h3>CLIENT FEEDBACK</h3>
            <div>
              <ul className={styles.switch}>
                {comments.map(comment => (
                  <li key={comment.id}>
                    <a
                      onClick={() => handlePageChange(comment.id)}
                      className={`${styles.dot} ${
                        activeComment === comment.id ? styles.activeDot : ''
                      }`}
                    ></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.contents}>
            <ul>
              {activeCommentData && (
                <li className={styles.active}>
                  <div className={styles.commentContainer}>
                    <div className={styles.client}>
                      <h4>{activeCommentData.author}</h4>
                      <div className={styles.avatar}>
                        <img
                          src={`/images/comments/${activeCommentData.avatar}`}
                          alt={activeCommentData.author}
                        />
                      </div>
                    </div>
                    <div className={styles.commentContent}>
                      {activeCommentData.content}
                    </div>
                    <div className={styles.quoteIcon}>
                      <FontAwesomeIcon icon={faQuoteRight} />
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
