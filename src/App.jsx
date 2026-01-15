import "./App.css";
import Header from "./components/header";

// Main video file
import videoFile from "./assets/iondodrugs.mp4";
import avatarImg from "./assets/avatar.jpg";

// Action button images
import likeImg from "./assets/like.svg";
import dislikeImg from "./assets/dislike.svg";
import shareImg from "./assets/share.svg";
import bellImg from "./assets/notif.svg";
import dropdownImg from "./assets/drop.svg";

// Related video thumbnails
import thumb1 from "./assets/thumb1.avif";
import thumb2 from "./assets/thumb2.avif";
import thumb3 from "./assets/thumb3.jpg";
import thumb4 from "./assets/thumb4.jpg";

function App() {
  const relatedVideos = [
    { img: thumb1, title: "Video 1 Title", views: "100k" },
    { img: thumb2, title: "Video 2 Title", views: "200k" },
    { img: thumb3, title: "Video 3 Title", views: "300k" },
    { img: thumb4, title: "Video 4 Title", views: "400k" },
  ];

  return (
    <div>
      <Header />

      <main className="content flex gap-4 p-4">
        {/* Left Side */}
        <section className="left flex-1">
          <div className="video-player mb-4">
            <video
              src={videoFile}
              controls
              width="100%"
              height="100%"
              className="rounded-md"
            />
          </div>

          <h1 className="title text-lg font-bold mb-2">Video 4 Title</h1>

          <div className="channel-row flex flex-col gap-2">
            <div className="channel-info flex items-center gap-2 mb-2">
              <img className="avatar" src={avatarImg} alt="Channel Avatar" />
              <div>
                <div className="channel-name font-semibold">Channel 4</div>
                <div className="subs text-gray-500 text-sm">
                  150k subscribers
                </div>
              </div>
              <button className="subscribe ml-auto px-4 py-1 rounded-full border border-gray-300 hover:bg-gray-200">
                Subscribe
              </button>
            </div>

            <div className="actions flex gap-2">
              <button className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-200">
                <img src={likeImg} alt="Like" /> Like
              </button>
              <button className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-200">
                <img src={dislikeImg} alt="Dislike" /> Dislike
              </button>
              <button className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-200">
                <img src={shareImg} alt="Share" /> Share
              </button>
              <button className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-200">
                <img src={bellImg} alt="Notify" /> Notify
              </button>
              <button className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-200">
                <img src={dropdownImg} alt="More" />
              </button>
            </div>
          </div>

          <div className="meta text-gray-500 text-sm mt-2">
            250k views • 4 months ago
          </div>
        </section>

        {/* Right Sidebar */}
        <aside className="right w-80">
          <h3 className="font-semibold mb-2">Related Videos</h3>
          {relatedVideos.map((v, i) => (
            <div className="related flex gap-2 mb-3" key={i}>
              <img className="thumb" src={v.img} alt="" />
              <div>
                <div className="rel-title font-semibold">{v.title}</div>
                <div className="rel-meta text-gray-500 text-sm">
                  Channel {i + 1} <br />
                  {v.views} views • 1 year ago
                </div>
              </div>
            </div>
          ))}
        </aside>
      </main>
    </div>
  );
}

export default App;
