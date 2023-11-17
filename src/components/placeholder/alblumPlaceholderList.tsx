import React from "react";
import AlblumPlaceholderItem from "./alblumPlaceholderItem";

interface AlblumPlaceholderListProps {
    i: number;
}

const AlblumPlaceholderList: React.FC<AlblumPlaceholderListProps> = (
    props: AlblumPlaceholderListProps
) => {

    const { i } = props;

    return (
        <section className="mb-12">
          <div className="grid grid-cols-5 gap-4">
             {Array.from({ length: i }, (_, index) => (
                    <AlblumPlaceholderItem key={index} />
                ))}
          </div>
        </section>
    );
}

export default AlblumPlaceholderList;