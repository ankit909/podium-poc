import React from 'react';
import '@nike/nike-one-video-player/dist/nike-one-video-player.min.css';
import NikeOneVideoPlayer from "@nike/nike-one-video-player";



const Video = () => {

    const sampleVideoUrl = 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4';

    return (
        <div style={{ width: 600, height: 400 }}>
            <NikeOneVideoPlayer
                preset="controls"
                captionsDefaultOn
                language="en-US"
                ariaLabel={'Test video'}
                sources={[
                    {
                        src:sampleVideoUrl,
                        type: 'video/mp4',
                    },
                ]}
            />
        </div>
    );
}

export default Video;

