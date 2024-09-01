"use client";
import React, { useEffect } from "react";
import data from "@/constants/team.json";
import PatronCard from "@/components/landing/PatronCard";
import BorderBox from "@/components/common/BorderBox";
import TeamCard from "@/components/team/TeamCard";

const TeamBox = () => {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <>
      <div className="w-[90%] mx-auto border-x-[1px] border-outline border-t-transparent pt-16 py-8 flex items-start justify-between"></div>
      <div className="w-full border-y-[1px] border-outline mb-12 flex flex-col">
        <BorderBox className="flex w-[90%] mx-auto flex-col border-t-0 gap-4 p-0">
          <div className="flex flex-col w-full gap-16">
            {data.map((section, i) => (
              <div className="flex flex-col w-full gap-6" key={i}>
                {section.map((group, j) => (
                  <>
                    <h2 className="text-6xl uppercase p-4 font-clash font-semimbold">
                      {group.title}
                    </h2>
                    <div className="w-full flex flex-wrap gap-5 justify-start">
                      {group.people.map((person, k) => (
                        <TeamCard
                          image={person.img}
                          name={person.name}
                          desig={person.position}
                        />
                      ))}
                    </div>
                  </>
                ))}
              </div>
            ))}
          </div>
        </BorderBox>
      </div>
    </>
  );
};

export default TeamBox;
