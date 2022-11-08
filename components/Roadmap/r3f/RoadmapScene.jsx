import Text from "./Text";
import { Galaxy } from "./Galaxy";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Skybox } from "./Skybox";
import Lights from "./Lights";
export default function RoadmapScene(props) {
  return (
    <>
      <Skybox />
      <Lights />
      <group>
        <Text size={0.6} height={0.15} text={`OUR ROADMAP`} glow />
        <Text posY={-1} size={0.6} height={0.15} text={` TO THE STARS`} glow />
      </group>
      <group position={[-8, -6.5, 10]} rotation={[0, Math.PI / 2, 0]}>
        <Text
          size={0.6}
          height={0.05}
          text={"STEP 1 :\nDEPLOY A CENTRALIZED\nGOVERNANCE TOKEN"}
          glow
        />
        <Text
          size={0.26}
          height={0.01}
          text={
            "In order to be a DAO, we need a decentralized governance system\nfor decision making. Launching the $MOONEY governance token is our\nfirst step. There is no expectation of profit with this token,\nthis token’s purpose is to coordinate our governance. Every \nperson, big or small, has gotten the same terms. No special \ntreatment for anyone. This is unusual for an Ethereum project, but\nwe thought it would be fairer for everyone involved that we \ndid not airdrop or pre-mine any number of tokens for people ahead \nof time. We are not VC funded, we are community organized and led,\nthis is very important to us! We will never mint more of this \ntoken."
          }
          posY={-2}
          offsetX={-2}
          color={"white"}
        />
      </group>
      <group position={[15, -18, 15]} rotation={[0, Math.PI, 0]}>
        <Text
          size={0.6}
          height={0.05}
          text={"STEP 2 :\nSEND A MOONDAO\nMEMBER TO SPACE"}
          glow
        />
        <Text
          size={0.26}
          height={0.01}
          text={
            "MoonDAO purchased two tickets to space\nwith Blue Origin. Our members voted\nwith $MOONEY to select Dude Perfect for one\nof the tickets, and selected another MoonDAO member\nat random with our Ticket To Space NFT Collection\n"
          }
          posY={-2}
          offsetX={-2}
          color={"white"}
        />
      </group>
      <group position={[15, -35, 20]} rotation={[Math.PI / 4, Math.PI, 0]}>
        <Text
          size={0.6}
          height={0.05}
          text={"STEP 3 :\nFUND SPACE RESEARCH\nAND EXPLORATION"}
          glow
        />
        <Text
          size={0.26}
          height={0.01}
          text={
            "We are currently at this phase at MoonDAO.\nIt is the least defined for a\nreason: it is up to the token holders\nwhere this ship goes. We aim to\nbe the NASA of the 21st century -- funding, supporting, and building\ntowards a positive future on the Moon.\nWe aim to create an interconnected\nweb of values-aligned organizations that are all supported\nby MoonDAO members. Groups that partner with us will\nhave access to the biggest community\nof space enthusiasts on the planet.\n\nThe exploration of space should unify the world,\nnot pit us against each other.\nWe believe that a collaborative approach will outperform any single organization."
          }
          posY={-2}
          offsetX={-2}
          color={"white"}
        />
      </group>
    </>
  );
}
