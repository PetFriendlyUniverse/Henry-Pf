import github from "../../../assets/socialmedia/github.svg";
import linkedin from "../../../assets/socialmedia/linkedin.svg";

function MiniCards(props) {
  return (
    <div className="my-8 flex flex-col items-center justify-center">
      <img
        className="h-16 w-16 rounded-full"
        src="https://pbs.twimg.com/profile_images/1584012412272971776/ngjy-YE8_400x400.jpg"
        alt="user photo"
      />
      <span className=" text-light my-2 px-4 py-1 text-xs text-white md:text-sm lg:relative lg:text-base">
        Nombre del {props.name}
      </span>
      <div className="flex w-full justify-evenly">
        <img className="text-white" src={github} alt="" />
        <img className="text-white" src={linkedin} alt="" />
      </div>
    </div>
  );
}

export default MiniCards;
