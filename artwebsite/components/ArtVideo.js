// ArtVideo.js
'use client';

import React, { useMemo } from 'react';
import styles from './art-video.module.css';
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { quality, format } from '@cloudinary/url-gen/actions/delivery';

const ArtVideo = ({ publicId, cloudName }) => {
  const cld = useMemo(
    () => new Cloudinary({ cloud: { cloudName } }),
    [cloudName]
  );

  const video = useMemo(() => {
    const v = cld.video(publicId);
    v.delivery(format('auto')).delivery(quality('auto'));
    return v;
  }, [cld, publicId]);

  const poster = useMemo(() => {
    const img = cld.video(publicId);
    return img.format('jpg').toURL().split('?')[0];
  }, [cld, publicId]);

  return (
    <AdvancedVideo
      cldVid={video}
      controls={false}
      autoPlay
      loop
      poster={poster}
      muted
      className={styles.artVideo}
      style={{ maxWidth: '600px', maxHeight: '600px' }}
    />
  );
};

export default ArtVideo;
