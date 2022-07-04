import { useQuery } from "@apollo/client";
import React, { useState } from "react";

export type BadgesSectionProps = {
    units: any;
  };

  export default function BadgesSection({ units }: BadgesSectionProps) {

    return (
      <>
        {units.map((unit) =>{
            if(unit.coding_badges.length > 0){
                return(
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-6">
                            <div className="text-gray-400 bg-gray-200 rounded-full text-center py-4">
                                {unit.title}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 mt-7 mb-16">
                            {
                                unit.coding_badges.map((badge) =>(
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="w-36 rounded-full bg-gray-200 flex items-center justify-center p-8 mb-7">
                                            {badge.user_coding_badges.length > 0 ?  <img
                                            className="w-28"
                                            src="/images/profile/achievement-badge-active.svg"
                                            ></img> :  <img
                                            className="w-28"
                                            src="/images/profile/achievement-badge.svg"
                                            ></img>
                                            }
                                        </div>
                                        <p className="text-base">{unit.title}</p>
                                        <p className="text-base mb-8 sm:mb-0">{badge.title}</p>
                                    </div>
                                ))
                            }                
                        </div>
                    </div>
                )
            }            
        })}
      </>
    );
  }
  