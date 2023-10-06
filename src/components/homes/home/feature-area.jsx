import React from "react";

const feature_content = [
  {
    id: 1,
    icon: "fi fi-rr-paper-plane",
    title: "Online Courses",
    des: "Our online courses provide you with convenient access to high-quality educational content from anywhere in the world. Learn at your own pace and on your schedule, allowing you to balance your studies with your other commitments.",
  },
  {
    id: 2,
    icon: "fi fi-rr-user",
    title: "Expert Trainer",
    des: "Benefit from the guidance of experienced trainers who are experts in their fields.Our instructors are dedicated to helping you master the subject matter and achieve your learning goals through personalized support and mentorship.",
  },

  {
    id: 3,
    icon: "fi fi-rr-document",
    title: "Get Certificate",
    des: "Upon successful completion of our courses, you will receive a certificate that validates your skills and knowledge. This credential can enhance your resume and open up new opportunities in your chosen field.",
  },
  {
    id: 4,
    icon: "fi fi-rr-calendar",
    title: "Life Time Access",
    des: "Gain lifelong access to course materials and resources. Even after completing a course, you can revisit the content whenever you need to refresh your knowledge or stay up-to-date with the latest developments in your area of study.",
  },
];

const FeatureArea = () => {
  return (
    <>
      <section
        className="tp-feature-area grey-bg pt-115 pb-90 pl-205 pr-205 bg-bottom"
        style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
      >
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60">
                <span className="tp-sub-title mb-20">What We Offer</span>
                <h2 className="tp-section-title">For Your Future Learning.</h2>
              </div>
            </div>
          </div>
          <div className="tp-feature-cn">
            <div className="row">
              {feature_content.map((item) => (
                <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
                  <div
                    className="tpfea mb-30 wow fadeInUp"
                    data-wow-duration=".8s"
                    data-wow-delay=".6s"
                  >
                    <div className="tpfea__icon mb-25">
                      <i className={item.icon}></i>
                    </div>
                    <div className="tpfea__text">
                      <h5 className="tpfea__title mb-20">{item.title}</h5>
                      <p>{item.des}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureArea;
