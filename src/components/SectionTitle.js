import React from "react";
import { bebas_neue } from "@/utils/fonts";

const SectionTitle = ({ title }) => {
    return (
        <div>
            <h2
                className={`${bebas_neue.className} uppercase text-5xl text-center mb-12`}
            >
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;
