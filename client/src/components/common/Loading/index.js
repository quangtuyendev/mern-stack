import React, { useContext } from 'react';
import { LoadingContext } from '../../../contexts/LoadingProvider';
import preloader from '../../../assets/images/gifs/preloader.gif';

function Loading() {
  const { loading } = useContext(LoadingContext);
  return loading ? (
    <div className="preloader">
      <div className="preloader-gif">
        <img src={preloader} alt="Loading gif" />
      </div>
    </div>
  ) : null;
}

export default Loading;
