import { FC } from "react";
import { Headers } from "design-react-kit";
import { SlimHeader } from "./SlimHeader";
import { CenterHeader } from "./CenterHeader";
import { NavHeader } from "./NavHeader";

export const CompleteHeader: FC = () => {
	return (
		<Headers sticky={true}>
			<SlimHeader />
			<div className="it-nav-wrapper">
				<CenterHeader />
				<NavHeader />
			</div>
		</Headers>
	);
};
