import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet } from '../../services/mediaQuery';
import styles from './ProjectTitle.module.css';

const ProjectTitle = () => {
  const Mobile = isMobile(useMediaQuery);
  const Tablet = isTablet(useMediaQuery);

  return (
    <div
      className={
        Mobile
          ? styles.ProjectTitle_mobile
          : Tablet
          ? styles.ProjectTitle_tablet
          : styles.ProjectTitle_desktop
      }
    >
      <h1
        className={
          Mobile
            ? styles.Kapusta_mobile
            : Tablet
            ? styles.Kapusta_tablet
            : styles.Kapusta_desktop
        }
      >
        Kapu
        <span
          className={
            Mobile
              ? styles.KapustaSign_mobile
              : Tablet
              ? styles.KapustaSign_tablet
              : styles.KapustaSign_desktop
          }
        >
          s
        </span>
        ta
      </h1>
      <p
        className={
          Mobile
            ? styles.SmartFinance_mobile
            : Tablet
            ? styles.SmartFinance_tablet
            : styles.SmartFinance_desktop
        }
      >
        smart finance
      </p>
    </div>
  );
};

export default ProjectTitle;
