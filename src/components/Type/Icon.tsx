
import Image from "next/image"
import TypeList from ".";
import Link from "next/link";


const TypeIcon = ({ name }: { name: string }) => {
    const exact = TypeList.find(type => type.name === name);
    const style = {
        backgroundColor: exact?.bgColor,
    }

    return (
        <Link
            href={'/type/' + name}
            style={style}
            className="p-2 w-fit rounded-full"
        >
            <Image priority src={exact?.icon} alt={name} width={32} height={32} />
        </Link>
    )
}

export default TypeIcon;
