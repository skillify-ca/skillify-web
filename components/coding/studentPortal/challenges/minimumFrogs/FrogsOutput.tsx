import Expression from "../dataStructures/Expression";
import HashMap from "../dataStructures/HashMap";

export default function FrogsOutput({ errorMessage, croakMap }) {
  return (
    <div>
      <p className="font-bold">Croaks Map</p>
      <HashMap data={croakMap} />
      <div className="mt-4">
        <p className="font-bold">Output</p>

        {errorMessage ? (
          <p className="p-4 font-bold text-moltres-500">{errorMessage}</p>
        ) : (
          <div className="text-xl">
            <Expression text={"croakMap.get('k')"} value={croakMap.get("k")} />
          </div>
        )}
      </div>
    </div>
  );
}
