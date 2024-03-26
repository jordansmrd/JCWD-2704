/** @format */

export default function BandList() {
  const members = [
    {
      name: "Rayi Putra Rahardjo",
      img_url:
        "https://pophariini.com/wp-content/uploads/2023/03/9F9DBFD8-1AF1-48E7-835E-16CF2202FF92-scaled.jpeg",
    },
    {
      name: "Astono Handoko",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/2/2a/Astono_Handoko_%282017%29.jpg",
    },
    {
      name: "Anindyo Baskoro",
      img_url:
        "https://thumb.viva.co.id/media/frontend/thumbs3/2012/10/29/177376_nino-ran_1265_711.jpg",
    },
    {
      name: "Anindyo Baskoro",
      img_url:
        "https://thumb.viva.co.id/media/frontend/thumbs3/2012/10/29/177376_nino-ran_1265_711.jpg",
    },
  ];
  return (
    <center>
      <div className="desc">
        <h2 className="title">THE BAND</h2>
        <p>
          <i className="subtitle">We love music</i>
        </p>
        <p className="paragraph">
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>

        <div className="members flex">
          {members.map((member, key) => (
            <Member key={key} {...member} />
          ))}
        </div>
      </div>
    </center>
  );
}

export function Member({ name, img_url }) {
  return (
    <div className="member">
      <p>{name}</p>
      <img src={img_url} alt="" />
    </div>
  );
}
