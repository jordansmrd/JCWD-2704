/** @format */

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">Hello World</h1>
      <div className=" min-h-screen bg-black text-white p-10 text-justify">
        <p className=" bg-[#30465C] text-[20px] text-[#81BDF8] p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          tempore et quisquam similique corrupti ratione molestiae iusto beatae
          ad in, autem animi, a accusamus molestias explicabo fugit. Excepturi,
          fugit voluptatem? Voluptates fugiat ipsum adipisci mollitia aliquam.
          Eaque illo, sit qui ex quae laudantium atque deserunt nostrum neque
          sapiente, est optio ab rem consequuntur? Ut unde optio quam esse est
          quisquam?
        </p>
        <center className="md:hidden">
          <button className="bg-red-500 py-2 px-5 border-2 border-yellow-400 mt-2 md:bg-green-400 ">
            click me
          </button>
        </center>
      </div>
    </div>
  );
}
export default HomePage;
