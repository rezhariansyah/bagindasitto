import React from "react";
import Carousel from "react-multi-carousel";
import img1 from "../../assets/testimonial/IMG_7811.jpg";
import img2 from "../../assets/testimonial/IMG_7813.PNG";
import img3 from "../../assets/testimonial/IMG_7819.PNG";
import img4 from "../../assets/testimonial/IMG_7812.PNG";
import img5 from "../../assets/testimonial/IMG_7815.PNG";
import img6 from "../../assets/testimonial/IMG_7818.PNG";
import img7 from "../../assets/testimonial/IMG_7816.PNG";
import img8 from "../../assets/testimonial/IMG_7814.jpg";
import "./Testimonial.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Testimonial = () => {
  return (
    <Carousel
      responsive={responsive}
      keyBoardControl={true}
      showDots={true}
      autoPlay={true}
      autoPlaySpeed={10000}
      infinite={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      <div
        className="card"
        style={{ width: "100%", border: "none", boxShadow: "none" }}
      >
        <img
          className="card-img-top mx-auto rounded-circle img-testi"
          src={img1}
          alt="img card"
        />
        <div className="card-body mb-3">
          <p className="name">
            Jeaniecia Halim - Head Designer Et Cetera & The Executive Ladies
          </p>
          <p className="card-text description" style={{ color: "#7F7F7F" }}>
            Kami bekerjasama dengan sitto untuk photoshoot campaign Et - Cetera
            di Sumba. Kami benar&quot; focus untuk proses Photoshoot karena
            sitto telah menyiapkan spot&quot; photo yang tepat dan all
            accommodation selama campaign dengan sangat baik. Jadi hasil
            photoshoot Et-Cetera makin sempurna. Pokoknya rekomen banget sitto
            jadi travel advisor kalian untuk trip&quot; di Indonesia. Gw dan
            team puas banget. Keep up the good work sitto !! Thanks for all the
            hard work.
          </p>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "100%", border: "none", boxShadow: "none" }}
      >
        <img
          className="card-img-top mx-auto rounded-circle img-testi"
          src={img2}
          alt="img card"
        />
        <div className="card-body mb-3">
          <p className="name">
            Adelia Suryani – CEO Travass Life &amp; Sail With Papiton
          </p>
          <p className="card-text description" style={{ color: "#7F7F7F" }}>
            Since I started in Business, I always have principle that my biggest
            investment is in people, the people whom i work with. I was lucky
            enough to cross my path with sitto and we stardted to make the
            ultimate dream come true. He&#39;s so determined to make
            everyting&#39;s great as planned. His honesty and hard work are his
            most valuable assets that he has and I can guarantee that he&#39;ll
            never break that one. I really hope we can work together again in
            the future, Cheers for this awesome time in the project, see u on
            top! Thank&#39;s sitto
          </p>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "100%", border: "none", boxShadow: "none" }}
      >
        <img
          className="card-img-top mx-auto rounded-circle img-testi"
          src={img3}
          alt="img card"
        />
        <div className="card-body mb-3">
          <p className="name">Rachmat Julio – Founder Anjani Trip</p>
          <p className="card-text description" style={{ color: "#7F7F7F" }}>
            Gw kenal sitto udah cukup lama dan waktu pas banget gw mau buat
            kapal lagi, gw minta tolong sitto untuk bantu design kapal gw, yang
            gw paling suka dari sitto diajak diskusi super enak, ide&quot;nya
            menarik, talk less do more dan yang terpenting harganya super
            terjangkau wkwk
          </p>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "100%", border: "none", boxShadow: "none" }}
      >
        <img
          className="card-img-top mx-auto rounded-circle img-testi"
          src={img4}
          alt="img card"
        />
        <div className="card-body mb-3">
          <p className="name">
            Ludy Paat – Marcomm GM PT. Delamibrands Kharisma Busana
          </p>
          <p className="card-text description" style={{ color: "#7F7F7F" }}>
            Sitto memang petualang sejati. Terbukti menjadi juara 1 Wrangler
            True Wanderer 2018, mengalahkan 11.400 lawanya. Menjadikan sitto
            jadi sangat berpengalaman di bidang travel (Travel Advisor).
            Ide&quot; ke lokasi yang indah mengenai Indonesia dan ditambah skill
            foto dan video membuat sitto seorang yang bertalenta serba bisa :D.
            Sampai saat ini sitto masih menjadi partner brand Wrangler untuk
            mempromosikan brand kami saat dia berkelana. Thank&#39;s sitto,
            sudah menjadikan bagian dari anak Indonesia yang berprestasi dan
            mengharumkan nama bangsa. Sukses travel Adventure-nya terus!
          </p>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "100%", border: "none", boxShadow: "none" }}
      >
        <img
          className="card-img-top mx-auto rounded-circle img-testi"
          src={img5}
          alt="img card"
        />
        <div className="card-body mb-3">
          <p className="name">Ade Raselawati - Owner Canting Solo</p>
          <p className="card-text description" style={{ color: "#7F7F7F" }}>
            Melihat presentasi hasil kerja sebelumnya, saya yakin untuk memulai
            project kapal bersama sitto. gga perlu saya bicara banyak Sitto akan
            cepat memahami keinginan design yang saya inginkan. Kerjanya
            profesional, project berjalan tepat waktu dan apa yang
            dipresentasikan sesuai dengan realisasi. dan tentunya dapat
            membedakan saat menjadi teman yang asik, dan Business Partner hehe.
            Thankss sitto, sukses terus backpacker sopan.
          </p>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "100%", border: "none", boxShadow: "none" }}
      >
        <img
          className="card-img-top mx-auto rounded-circle img-testi"
          src={img6}
          alt="img card"
        />
        <div className="card-body mb-3">
          <p className="name">
            Marieandjakessnow - Travel Blogger &amp; Influencer
          </p>
          <p className="card-text description" style={{ color: "#7F7F7F" }}>
            We met sitto while sailing in Komodo National Park. Sitto became our
            travelmate during the trip. He really knows the right place for
            photoshoot, droneshoot, and for underwater viewing. We will come
            back again sitto. See u !!
          </p>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "100%", border: "none", boxShadow: "none" }}
      >
        <img
          className="card-img-top mx-auto rounded-circle img-testi"
          src={img7}
          alt="img card"
        />
        <div className="card-body mb-3">
          <p className="name">Nunu Ihsan – Owner Woywoy Resort</p>
          <p className="card-text description" style={{ color: "#7F7F7F" }}>
            Ketemu di bira pas kakak sopan ini lagi proyek phinisi, setelah itu
            lama&quot; jadi sister. Anaknya easy going dan tetap asik diajak
            joged walaupun dia tim coca cola dingin dan no rokok (gw juga heran,
            kok bisaaa gak tergoda wkwk), Anyyway I can say he is one of the
            nicest dan honest guy i ever met during the trip. Gak bawel, jago
            foto (ciehh) dan bisa diajak trip kece, jago banget lu bikin
            perencanaan budget. See u next trip cong !
          </p>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "100%", border: "none", boxShadow: "none" }}
      >
        <img
          className="card-img-top mx-auto rounded-circle img-testi"
          src={img8}
          alt="img card"
        />
        <div className="card-body mb-3">
          <p className="name">
            Asoka Remadja – Travel Blogger &amp; Influencer
          </p>
          <p className="card-text description" style={{ color: "#7F7F7F" }}>
            Adventure and Fearless
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default Testimonial;
