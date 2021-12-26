import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { createClient } from "contentful";
import { useState, useEffect, useRef } from "react";
import TFSA from "../../components/finance/tfsa";
import Navbar from "../../components/Navbar";
import { FETCH_SKILLS_FOR_UNIT } from "../../graphql/fetchSkillsForUnit";

import ContentfulContent from "../../components/explore/ContentfulContent";
import { getEntryId } from "../api/explore";

const Explore = ({ unitTitle, entry }) => {
    const getComponent = () => {
        if (unitTitle === "tfsa") {
            return <TFSA />
        } else {
            return <div className="flex flex-col items-center">
                {entry && <ContentfulContent data={entry.fields.content} />}
            </div>
        }
    }

    if (!entry) {
      return "Loading...";
    }
    
    return <div>
        <Navbar />
        {getComponent()}
    </div>
}

export async function getStaticProps({ params }) {
    const client = createClient({
      space: process.env.CF_SPACE_ID,
      accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN
    }); 
    
    
    const id = getEntryId("math", Number.parseInt(params.slug[1]), params.slug[0])
    const res = await client.getEntry(id)

    if (!res) {
      return {
        notFound: true,
      };
    }
    //return multiple descriptions,
    return { props: { entry: res, slug: params.slug } };
  }

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: ["addition", "1"] } },
            { params: { slug: ["subtraction", "1"] } },
            { params: { slug: ["multiplication", "1"] } },
            { params: { slug: ["division", "1"] } },
            { params: { slug: ["tfsa", "1"] } },
            { params: { slug: ["budgeting", "1"] } },
        ],
        fallback: true,
    };
}


export default Explore;