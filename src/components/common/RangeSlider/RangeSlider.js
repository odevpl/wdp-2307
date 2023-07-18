import React, { useState } from 'react';
import { Range } from 'react-range';
import styles from './RangeSlider.module.scss';
import Button from '../../common/Button/Button';

const RangeSlider = () => {
  const [values, setValues] = useState([25, 75]);

  const handleValuesChange = newValues => {
    setValues(newValues);
  };

  return (
    <div className={styles.container}>
      <Range
        values={values}
        min={0}
        max={100}
        step={1}
        onChange={handleValuesChange}
        renderTrack={({ props, children }) => (
          <div {...props} className={styles.track}>
            <div
              className={styles.activeTrack}
              style={{
                width: `${values[1] - values[0]}%`,
                left: `${values[0]}%`,
              }}
            />
            <div className={styles.inactiveTrack} />
            {children}
          </div>
        )}
        renderThumb={({ props }) => <div {...props} className={styles.thumb} />}
      />
      <div className={styles.rangeButtonContainer}>
        <div className={`col-5 text-start`}>
          <Button variant='main' className={styles.filterButton}>
            Filter
          </Button>
        </div>
        <div className={`${styles.rangeValues} col-5 text-end`}>
          ${values[0]} - ${values[1]}
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
