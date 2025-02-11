import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Tutorials() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;

  const TutorialBox = props => (
    <a href={props.link} className="tutorial-box">
      <div className="how-to">
        <h5>{props.title}</h5>
        <hr></hr>
        <p>{props.des}</p>
      </div>
    </a>
  );

    return (
        <Layout 
            title={`Tutorials`}
            description="A Website To Teach Everything About PocketMine-MP"
        >
            <div className="section">
                <div className="container">
                    <div className="post">
                        <header className="postHeader t-header">
                            <h1>Tutorials</h1>
                            <hr></hr>
                        </header>
                        <div className="tutorial-grid">
                            <TutorialBox
                            link="tutorials/htmap/introduction"
                            title="How to make a Plugin?"
                            des="Learn on how to make a pocketmine plugin." 
                            />
                            <TutorialBox
                            link="tutorials/htufa/introduction"
                            title="How to use FormAPI"
                            des="Ever wanted to create forms? Here is a guide." 
                            />
                            <TutorialBox
                            link="tutorials/htuim/introduction"
                            title="How to use InvMenu"
                            des="Do you want to make inventory menus? Learn how to do it here." 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Tutorials;
