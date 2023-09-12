import React from "react";
import "./style.css";
import Image from "next/image";
import Head from "next/head";

const Card = () => {
  return (
    <div className="cardWrapper">
      <Head>
        {/* Add the viewport meta tag here */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="card">
        <Image
          src="/images/Rectangle.png"
          alt="Building"
          width={300}
          height={540}
          id="imgcard"
        />
        <Image
          style={{ marginTop: "10px", marginLeft: "10px" }}
          src="/images/1.png"
          alt="Building"
          width={170}
          height={10}
          id="imgcard1"
        />

        <Image
          src="/images/london.png"
          style={{ marginTop: "10px" }}
          alt="Building"
          width={70}
          height={10}
          id="imgcard2"
        />

        <Image
          src="/images/scan.png"
          alt="Building"
          width={200}
          height={200}
          id="imgcard3"
        />

        <Image
          src="/images/QR.png"
          alt="Building"
          width={20}
          height={20}
          id="imgcard4"
        />
        <p className="para">HISTORY</p>
        <Image
          src="/images/tourch.png"
          alt="Building"
          width={10}
          height={20}
          id="imgcard5"
        />
      </div>
    </div>
  );
};

export default Card;
