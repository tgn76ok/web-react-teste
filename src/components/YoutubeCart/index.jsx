import YouTube from 'react-youtube';

function ContainerOutsideExample({id}) {


  const opts = {
    height: '300',
    width: '450',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      disablekb:1,
    },
  };
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  
  return (
    <>
    <YouTube videoId={id} opts={opts} onReady={_onReady} />
    </>
  );
}

export default ContainerOutsideExample;