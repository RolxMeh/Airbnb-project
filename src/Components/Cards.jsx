export default function Cards(props) {
  let badgeText;

  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <section className="my-12 ml-9 font-poppins">
      <div className="w-52 h-auto -mx-7 relative">
        {badgeText && (
          <div className="bg-white w-16 h-5 pt-[2px] text-xs rounded text-center absolute top-2 left-1">
            {badgeText}
          </div>
        )}
        <img src={props.coverImg} className="w-44 h-60 -mb-4" />
        <div className="mt-2">
          <img src="./../../star.png" alt="star" className="w-3 h-3 inline" />
          <p className="ml-1 text-xs inline">
            {props.stats.rating}
            <span className="text-gray-500">
              ({props.stats.reviewCount}) <span className="text-3xl">.</span>
              {props.location}
            </span>
          </p>
        </div>
        <p className="max-w-[176px] text-xs mt-1">{props.title}</p>
        <p className="text-xs">
          <span className="font-bold">From ${props.price}</span> / person
        </p>
      </div>
    </section>
  );
}
