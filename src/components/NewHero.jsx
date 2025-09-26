import React, { useMemo, useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog";
import { Copy, ExternalLink, Heart, Shield } from "lucide-react";
// import { toast } from "@/hooks/use-toast";
// import campaignImage from "@/assets/campaign-hero.jpg";
import qrCodeImage from "../assets/icons/qrcode1.jpg";
import { Button, Modal, notification } from "antd";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane, FaTiktok, FaYoutube } from "react-icons/fa";

const Context = React.createContext({
  name: "Default",
});

export const NewHero = () => {
  const [showDonationModal, setShowDonationModal] = useState(false);
  const contractAddress = "0x1B7447E29B90D00461966D01E533Fa1b69574444";
  const donorAddress = "0x78d913BCF28323485c7766842e8F36e082D6f890";

  const handleOk = () => {
    setShowDonationModal(false);
  };
  const handleCancel = () => {
    setShowDonationModal(false);
  };

  const [api, contextHolder] = notification.useNotification();

  const contextValue = useMemo(
    () => ({
      name: "Ant Design",
    }),
    []
  );

  const openNotification = () => {
    api.info({
      message: "Notification",
      description: "Address Copied to clipboard",
      placement: "bottomLeft",
    });
  };

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      openNotification();
    } catch (err) {
      console.error("Failed to copy address:", err);
    }
  };
  const copydonorAddress = async () => {
    try {
      await navigator.clipboard.writeText(donorAddress);
      openNotification();
    } catch (err) {
      console.error("Failed to copy address:", err);
    }
  };

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 to-purple-950"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-pink-500/5"></div>
        </div>

        <div className="container relative z-10 px-6 py-20 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-black leading-tight uppercase md:text-6xl">
              Crypto is too serious. <br />{" "}
              <span className="text-[#ffd93d]">Tenge Tenge Movement</span> is
              here to mess things up.
            </h1>
            <p className="mt-4 text-lg font-bold md:text-2xl">
              We Dance, We Wrestle, We Laugh, We Meme while the market cries.
            </p>
          </div>
          <div className="max-w-5xl mx-auto text-center">
            {/* Campaign Badge */}
            <br />
            <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 border rounded-full bg-green-600/20 border-green-600/30">
              <Heart className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-600">
                ACTIVE CAMPAIGN
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 text-6xl font-black leading-none md:text-8xl">
              {/* <span className="text-white">EDUCATION IS</span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
                THE FUTURE.
              </span>
              <br /> */}
              <span className="text-5xl text-pink-500 md:text-7xl">
                1M TABLETS FOR 1M KIDS
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-3xl mx-auto mb-12 text-xl font-medium md:text-2xl text-muted-foreground">
              We Build, We Learn, We Grow, We Give while the world changes. Join
              our mission to provide tablets and digital education to 1 million
              children worldwide.
            </p>

            {/* Campaign Progress */}
            <div className="max-w-2xl p-8 mx-auto mb-12 border bg-card/50 backdrop-blur-sm border-border rounded-2xl">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-500">300+</div>
                  <div className="text-sm text-gray-400">Tablets Given Out</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">0.03</div>
                  <div className="text-sm text-gray-400">Goal Progress</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-500">
                    999,700
                  </div>
                  <div className="text-sm text-gray-400">Tablets Needed</div>
                </div>
              </div>
              <div className="w-full h-3 mt-6 bg-gray-700 rounded-full">
                <div
                  className="h-3 transition-all duration-1000 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                  style={{ width: "1.2%" }}
                ></div>
              </div>
            </div>

            {/* Action Buttons */}
            {/* Action Buttons */}
            <div className="flex flex-col justify-center gap-4 mb-12 sm:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:shadow-[0_0_40px_rgba(255,193,7,0.3)] transition-all duration-300 text-lg px-8 py-6 rounded-full font-bold text-black border-0"
                onClick={() => setShowDonationModal(true)}
              >
                Donate Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] transition-all duration-300 text-lg px-8 py-6 rounded-full font-bold border-pink-500/50 text-white"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Campaign
              </Button>
            </div>

            {/* BSC Contract Address */}
            <div className="max-w-3xl p-6 mx-auto mb-12 border bg-card/30 backdrop-blur-sm border-border rounded-2xl">
              <div className="mb-2 text-sm text-muted-foreground">
                BSC Token Contract Address (Binance Smart Chain)
              </div>
              <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl">
                <code className="mr-4 font-mono text-sm break-all text-foreground">
                  {contractAddress}
                </code>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyAddress}
                  className="text-white shrink-0 bg-accent hover:text-accent/80 hover:bg-accent/80"
                >
                  <Copy className="w-4 h-4 mr-2 text-white hover:text-accent/80" />
                  Copy
                </Button>
              </div>
            </div>

            {/* Campaign Image */}
            {/* <div className="max-w-4xl mx-auto">
              <img
                src={campaignImage}
                alt="Children learning with tablets - 1M Tablets for 1M Kids campaign"
                className="w-full h-auto shadow-2xl rounded-2xl"
              />
            </div> */}
          </div>
        </div>

        {/* Floating Socials Tab */}
        <div className="fixed right-0 z-50 -translate-y-1/2 top-1/2">
          <div className="border shadow-2xl bg-slate-900/90 backdrop-blur-sm border-slate-700/50 rounded-l-2xl">
            <div className="flex flex-col gap-3 p-3">
              <a
                href="https://x.com/OfficialTenge"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 transition-all duration-300 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-xl hover:scale-110"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@rangotengetenge_official?si=x29Drrt-92IKJx5l"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 transition-all duration-300 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl hover:scale-110"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@rango_tenge_tenge_ofical?_t=ZM-8yNNZuuTSqb&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 transition-all duration-300 text-slate-400 hover:text-blue-600 hover:bg-blue-600/10 rounded-xl hover:scale-110"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/theofficialtenge"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 transition-all duration-300 text-slate-400 hover:text-pink-500 hover:bg-pink-500/10 rounded-xl hover:scale-110"
              >
                <FaTelegramPlane className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Modal */}
      <Modal open={showDonationModal} onOk={handleOk} onCancel={handleCancel}>
        <div className="max-w-md mx-auto bg-card border-border">
          {/* <DialogHeader className="space-y-4 text-center"> */}
          <h2 className="text-2xl font-bold text-primary">
            Support 1M Kids 📱
          </h2>
          <h4 className="text-muted-foreground">
            Every donation helps us provide tablets and digital education to
            children in need
          </h4>
          {/* </DialogHeader> */}

          <div className="py-6 space-y-6">
            {/* BSC Network Info */}
            <div className="p-4 border bg-campaign-orange/10 border-campaign-orange/30 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-campaign-orange" />
                <span className="font-semibold text-campaign-orange">
                  Binance Smart Chain (BSC)
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Low fees, fast transactions. Make sure your wallet is connected
                to BSC network.
              </p>
            </div>

            {/* QR Code */}
            <div className="text-center">
              <div className="inline-block p-4 mb-4 bg-white shadow-lg rounded-xl">
                <img
                  src={qrCodeImage}
                  alt="Donation QR Code for BSC address"
                  className="w-48 h-48 mx-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Scan QR code with your BSC-compatible wallet
              </p>
            </div>

            {/* Contract Address */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">
                Contract Address (BSC)
              </label>
              <div className="p-3 border rounded-lg bg-background/50 border-border">
                <div className="flex items-center justify-between">
                  <code className="mr-2 font-mono text-xs break-all text-foreground">
                    {donorAddress}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copydonorAddress}
                    className="shrink-0 hover:bg-primary/10"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Donation Info */}
            {/* <div className="grid grid-cols-2 gap-4">
              <div className="p-4 text-center bg-muted/50 rounded-xl">
                <Zap className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-lg font-bold text-primary">$50</div>
                <div className="text-sm text-muted-foreground">= 1 Tablet</div>
              </div>
              <div className="p-4 text-center bg-muted/50 rounded-xl">
                <Shield className="w-8 h-8 mx-auto mb-2 text-campaign-green" />
                <div className="text-lg font-bold text-campaign-green">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">To Kids</div>
              </div>
            </div> */}

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                className="w-full font-bold transition-all duration-300 bg-gradient-primary hover:shadow-glow-primary"
                onClick={() =>
                  window.open(
                    `https://bscscan.com/address/${donorAddress}`,
                    "_blank"
                  )
                }
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View on BSCScan
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowDonationModal(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </Context.Provider>
  );
};
