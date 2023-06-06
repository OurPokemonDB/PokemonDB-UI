import Image from "next/image"
import TypeConfig from ".";

const TypeIcon = ({ name }: { name: string }) => {
    const exact = TypeConfig.find(type => type.name === name);
    const style = {
        backgroundColor: exact?.bgColor,
    }
    return (
        <div style={style} className="p-2 w-fit rounded-full">
            <Image priority src={exact?.icon} alt={name} width={32} height={32} />
        </div>
    )
}

export default TypeIcon;
