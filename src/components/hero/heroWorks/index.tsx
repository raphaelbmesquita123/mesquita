import React, { ReactElement } from "react";

const HeroWorks: React.FC = (): ReactElement => {
  const imgs = [
    "https://images.unsplash.com/photo-1662100598399-a72981bd84d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI2NTUzMg&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1660576333511-6fc34a718191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI2NTU1Ng&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1653579636217-0a062a1390ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI2NTU3Mw&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1660675772110-4b8ed828fdb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI2NTU4Nw&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1661101571617-8fdd3b258199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI2NTU5Mw&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1662199513934-5be245dcb32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI2NTYxMw&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1661761980951-b5c479c18b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI2NTYyMg&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1662947077803-b92386fafd92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI2NTY1NA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1660534793910-1236bb34e667?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI2NTY1OQ&ixlib=rb-1.2.1&q=80&w=1080",
  ];
  return (
    <section
      id='services'
      className='columns-4 px-8 py-28 -sm:columns-2 max-w-[1400px] mx-auto'
    >
      {imgs.map((img, i) => {
        return (
          <img
            key={i}
            src={img}
            className={`w-full rounded-lg mt-4 hover:scale-105 transition-all duration-500 ease-in-out `}
            alt={`hero-${i}`}
          />
        );
      })}
    </section>
  );
};

export default HeroWorks;
