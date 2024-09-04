"use client";
import React from "react";
import data from "@/constants/team.json";
import BorderBox from "@/components/common/BorderBox";
import TeamCard from "@/components/team/TeamCard";

const TeamBox = () => {
  return (
    <>
      <div className="w-[90%] mx-auto border-x-[1px] border-outline border-t-transparent pt-16 py-8 flex items-start justify-between"></div>
      <div className="w-full border-y-[1px] border-outline mb-12 flex flex-col">
        <BorderBox className="flex w-[90%] mx-auto flex-col border-t-0 gap-4 p-0">
          <div className="flex flex-col w-full gap-24">
            {data.map((group, j) => (
              <section key={j}>
                <h2 className="text-4xl md:text-6xl uppercase p-4 w-full text-center font-clash font-semimbold">
                  {group.title}
                </h2>
                <div className="w-full flex flex-wrap gap-5 justify-center">
                  {group.people.map((person, k) => (
                    <TeamCard
                      key={k}
                      image={person.img}
                      name={person.name}
                      desig={person.position}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </BorderBox>
      </div>
    </>
  );
};

export default TeamBox;
