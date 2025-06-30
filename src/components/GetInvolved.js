// Get Involved Section Component
import { Modal, Button, notification } from "antd";
import React, { useMemo, useState } from "react";
import bnblogo from "../assets/images/icons8-bnb-100.png";
import btclogo from "../assets/images/icons8-bitcoin-100.png";
import sollogo from "../assets/images/icons8-solana-100.png";

const GetInvolved = () => {
  const [opnModal, setOpenModal] = useState(false);
  const btcadd = "bc1q7w5wwrdsj2m379mgfuvc25ytdrsw7l3f6s9gah";
  const bnbadd = "0x993178a14721548f7b03a6824983468fae531c93";
  const soladd = "5mjndvmv3Wzem2cmiXGunw42aDoBv7kbpvxDmGwPSDQo";
  const Context = React.createContext({ name: "Default" });
  const [api, contextHolder] = notification.useNotification();
  const handleModal = () => {
    setOpenModal(true);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleCopyaddress = async (chain) => {
    switch (chain) {
      case "btc":
        try {
          await navigator.clipboard.writeText(btcadd);
          api.info({
            message: `bc1q7w5wwrdsj2m379mgfuvc25ytdrsw7l3f6s9gah`,
            description: (
              <Context.Consumer>
                {() => `BTC address copied to clipboard.`}
              </Context.Consumer>
            ),
            placement: "bottomLeft",
          });
        } catch (err) {
          api.info({
            message: `Notification`,
            description: (
              <Context.Consumer>
                {() => `Failed to copy Address.`}
              </Context.Consumer>
            ),
            placement: "bottomLeft",
          });
        }
        break;

      case "bnb":
        try {
          await navigator.clipboard.writeText(bnbadd);
          api.info({
            message: `0x993178a14721548f7b03a6824983468fae531c93`,
            description: (
              <Context.Consumer>
                {() => `BNB address copied to clipboard.`}
              </Context.Consumer>
            ),
            placement: "bottomLeft",
          });
        } catch (err) {
          api.info({
            message: `Notification`,
            description: (
              <Context.Consumer>
                {() => `Failed to copy Address.`}
              </Context.Consumer>
            ),
            placement: "bottomLeft",
          });
        }
        break;

      case "sol":
        try {
          await navigator.clipboard.writeText(soladd);
          api.info({
            message: `5mjndvmv3Wzem2cmiXGunw42aDoBv7kbpvxDmGwPSDQo`,
            description: (
              <Context.Consumer>
                {() => `Solana address copied to clipboard.`}
              </Context.Consumer>
            ),
            placement: "bottomLeft",
          });
        } catch (err) {
          api.info({
            message: `Notification`,
            description: (
              <Context.Consumer>
                {() => `Failed to copy Address.`}
              </Context.Consumer>
            ),
            placement: "bottomLeft",
          });
        }
        break;

      default:
        break;
    }
  };

  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <section
        id="involved"
        className="container p-4 mx-auto my-16 bg-green-100 shadow-lg md:p-8 rounded-3xl"
      >
        <h2
          className="flex items-center justify-center mb-10 text-4xl font-bold text-center text-green-700"
          style={{ fontFamily: '"Luckiest Guy", cursive' }}
        >
          <i className="mr-3 fas fa-users-gear"></i>Join the Tenge Tenge Army!
          Your Mission Awaits!
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-xl text-center">
          We're not just building a movement; we're building a legacy! This
          isn't just about giving; it's about growing. Join our fantastic
          community of creators, educators, crypto-wizards, and innovators! Our
          shared superpower:{" "}
          <strong>A world where NO child is left out of the future!</strong>
        </p>
        <div className="grid items-center gap-8 m-auto text-center md:grid-cols-2">
          <div className="p-6 transition duration-300 transform bg-white shadow-md rounded-2xl hover:translate-y-2 animate-pop-in">
            <i className="mb-4 text-5xl text-blue-600 fas fa-hand-holding-dollar animate-bounce-slow"></i>
            <h3
              className="mb-4 text-3xl font-bold text-blue-600"
              style={{ fontFamily: '"Luckiest Guy", cursive' }}
            >
              Be a Donation Hero!
            </h3>
            <p className="mb-6 text-lg">
              Every coin, every dollar, every bit of kindness helps us launch
              more young minds into the universe of knowledge! You're an
              education superhero!
            </p>
            <button
              onClick={handleModal}
              className="px-8 py-3 text-lg font-bold text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 hover:scale-105"
            >
              Give a Little Magic! <i className="ml-2 fas fa-star"></i>
            </button>
          </div>
          {/* <div className="p-6 transition duration-300 delay-200 transform bg-white shadow-md rounded-2xl hover:translate-y-2 animate-pop-in">
          <i className="mb-4 text-5xl text-purple-600 fas fa-puzzle-piece animate-bounce-slow"></i>
          <h3
            className="mb-4 text-3xl font-bold text-purple-600"
            style={{ fontFamily: '"Luckiest Guy", cursive' }}
          >
            Volunteer Your Super Skills!
          </h3>
          <p className="mb-6 text-lg">
            Got a special talent (like coding, drawing, or being super
            organized)? Join our team of amazing volunteers and help shape young
            minds with your unique spark!
          </p>
          <a href="mailto:info@tengetenge.org">
            <button className="px-8 py-3 text-lg font-bold text-white transition duration-300 ease-in-out transform bg-purple-500 rounded-full shadow-lg hover:bg-purple-600 hover:scale-105">
              Unleash Your Power! <i className="ml-2 fas fa-bolt"></i>
            </button>
          </a>
        </div> */}
          <div className="p-6 transition duration-300 transform bg-white shadow-md rounded-2xl hover:translate-y-2 animate-pop-in delay-400">
            <i className="mb-4 text-5xl text-gray-800 fab fa-x-twitter icon-bounce"></i>
            <h3
              className="mb-4 text-3xl font-bold text-gray-800"
              style={{ fontFamily: '"Luckiest Guy", cursive' }}
            >
              Join Our X-cellent Community!
            </h3>
            <p className="mb-6 text-lg">
              Stay updated with our epic adventures, fun events, and inspiring
              stories! Join the chat and share your ideas on X!
            </p>
            <a
              href="https://x.com/officialtenge"
              target="_blank"
              className="px-8 py-3 text-lg font-bold text-white transition duration-300 ease-in-out transform bg-gray-800 rounded-full shadow-lg hover:bg-gray-900 hover:scale-105"
            >
              Follow Our Trail on X <i className="ml-2 fab fa-x-twitter"></i>
            </a>
          </div>
        </div>

        <Modal
          open={opnModal}
          centered
          onCancel={handleCancel}
          onOk={handleCancel}
          footer={false}
          title="Copy network Address"
          style={{ fontFamily: '"Luckiest Guy", cursive' }}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-16 m-auto justify-evenly">
              <Button
                size="large"
                shape="circle"
                className="w-16 h-16 p-2 md:w-24 md:h-24"
                onClick={() => handleCopyaddress("bnb")}
              >
                <img src={bnblogo} className="w-20 h-auto" />
              </Button>
              <Button
                size="large"
                shape="circle"
                className="w-16 h-16 p-2 md:w-24 md:h-24"
                onClick={() => handleCopyaddress("btc")}
              >
                <img src={btclogo} className="w-20 h-auto" />
              </Button>
              <Button
                size="large"
                shape="circle"
                className="w-16 h-16 p-2 md:w-24 md:h-24"
                onClick={() => handleCopyaddress("sol")}
              >
                <img src={sollogo} className="w-20 h-auto" />
              </Button>
            </div>
            <div className="flex justify-center gap-10 m-auto mt-2 md:gap-20">
              <p
                className="cursor-pointer"
                onClick={() => handleCopyaddress("bnb")}
              >
                Copy 0x993...
              </p>
              <p
                className="cursor-pointer"
                onClick={() => handleCopyaddress("btc")}
              >
                Copy bc1q7...
              </p>
              <p
                className="cursor-pointer"
                onClick={() => handleCopyaddress("sol")}
              >
                Copy 5mjnd...
              </p>
            </div>
            {/* <div className="flex gap-24 m-auto mt-2 justify-evenly">
              <p>Copy</p>
              <p>Copy</p>
              <p>Copy</p>
            </div> */}
          </div>
        </Modal>
      </section>
    </Context.Provider>
  );
};

export default GetInvolved;
