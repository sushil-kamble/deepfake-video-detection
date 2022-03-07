import deepfakeImage from "../assets/deepfake_detection.webp";

function About() {
  return (
    <section className="m-4">
      <h1>About Project</h1>
      <hr className="mb-4" />
      <div className="grid grid-cols-1 mx-auto">
        <div className="relative border p-4 rounded-md shadow-xl bg-gray-400 mx-4">
          <div>
            <p className="pb-5 font-semibold">
              <i>
                Deepfake is typically used to refer to a video that has been
                edited using an algorithm to replace the person in the original
                video with someone else (especially a public figure) in a way
                that makes the video look authentic.
              </i>
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Abstract</h1>
            <p className="text-gray-700 px-5 pb-5">
              In recent months, general learning-based software tools have
              helped build reliable facial expressions on videos that leave a
              few traces of deception, in what they are known as "DeepFake" (DF)
              videos. Deepfake technology may be used to do highly realistic
              face modification. So far, a big number of deepfake video have
              circulated on the Internet, the most of them target celebrities or
              politicians. This type of footage can be used to cause risks to
              privacy, fraud, and other issues. With people's eyes, good quality
              DeepFake video detection can be difficult to distinguish. To keep
              it from posing a threat to human society, a number of studies have
              been initiated, including the development of detection tools and
              the establishment of large-scale standards. It is a
              straightforward task to create the DF utilizing artificially
              intelligent techniques. However, detecting these DF is a
              significant difficulty. Because it is difficult to teach the
              algorithm to detect the DF.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Concerns</h1>
            <div className="grid grid-cols-2 px-5 items-center">
              <ul className="list-disc ">
                <li>Blackmail</li>
                <li>Politics</li>
                <li>Internet meme (false message)</li>
                <li>Sockpuppets</li>
                <li>Credibility and authenticity</li>
              </ul>
              <img src={deepfakeImage} alt="deefakeImage" className="w-full" />
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Solution</h1>
            <p className="text-gray-700 px-5 pb-5">
              There are several tools available for constructing the
              Deepfakes(DF), however there are few for detecting the DF. We will
              provide a web-based platform for users to post videos and
              determine if they are fake or real. We will extend it even further
              by providing an API to our users, so they can integrate it with
              their application. Even large applications like Instagram and
              YouTube can integrate this project into their applications for
              quick deepfake detection. <br />
              <br />
              There are 3 phases in the detection of the deepfakes, training
              phase, predicting phase and feedback phase. In the training Phase,
              a Neural network will be trained on a set of videos from DFDC, the
              output of the training phase will be a trained model which will be
              used further in the detection of new video. The second phase is a
              prediction phase, input to this phase is a raw video, output will
              be whether a video is real or fake, along with the confidence,
              face cropped video and image sequence. Third phase will be the
              feedback phase, after the system has given the result, the user
              will be prompted whether he/she knows about the video, if yes and
              our detection is wrong then we will be training our model again
              with that video. <br />
              <br />
              So this system is an incremental system, meaning it will get
              better and better if more and more videos are fed to it. All these
              three phases are equally important for this system to work
              properly.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Result</h1>
            <p className="text-gray-700 px-5 pb-5">
              Our model gives us a result of the video is a DeepFake or not with
              an accuracy of <b>84.60%</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
