import React from 'react';
import styles from './Comments.module.scss';

class Comments extends React.Component {
  state = {
    comments: [
      { id: 1, author: 'John', content: 'Great product!', avatar: 'john.jpg' },
      { id: 2, author: 'Jane', content: 'I love it!', avatar: 'jane.jpg' },
      { id: 3, author: 'Mike', content: 'Highly recommended.', avatar: 'mike.jpg' },
    ],
    activeComment: 1,
  };

  handlePageChange = commentId => {
    this.setState({ activeComment: commentId });
  };

  render() {
    const { comments, activeComment } = this.state;
    const activeCommentData = comments.find(comment => comment.id === activeComment);

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
                        onClick={() => this.handlePageChange(comment.id)}
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
                      <div className={styles.avatar}>
                        <img
                          src={activeCommentData.avatar}
                          alt={activeCommentData.author}
                        />
                      </div>
                      <div className={styles.commentContent}>
                        {activeCommentData.content}
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
  }
}

export default Comments;
