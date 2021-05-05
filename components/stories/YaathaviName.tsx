import React from 'react'

export interface YaathaviNameProps {
    textColor: string,
    backgroundColor: string
}

export default function YaathaviName(props: YaathaviNameProps) {
    return (
       <button className = {props.backgroundColor+" p-64 w-64 h-64"}>  <p className = {props.textColor}> Yaathavi </p> </button>
    );
}

