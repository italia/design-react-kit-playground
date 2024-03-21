import { FC } from "react";
import { Header, HeaderContent, HeaderSearch, HeaderRightZone, HeaderSocialsZone, Icon, HeaderBrand } from "design-react-kit";

type Props = any;

export const CenterHeader: FC<Props> = ({ props }) => {
	return (
		<Header type="center" theme={props?.theme}>
			<HeaderContent>
				<HeaderBrand iconName={props?.iconName} iconAlt={props?.iconAlt || ""}>
					<h2>Lorem Ipsum Lorem Ipsum</h2>
					<h3>Inserire qui la tag line</h3>
				</HeaderBrand>
				<HeaderRightZone>
					<HeaderSocialsZone label="Seguici su">
						<ul>
							<li>
								<a href="#" aria-label="Facebook" target="_blank">
									<Icon icon="it-facebook" />
								</a>
							</li>
							<li>
								<a href="#" aria-label="Github" target="_blank">
									<Icon icon="it-github" />
								</a>
							</li>
							<li>
								<a href="#" aria-label="Twitter" target="_blank">
									<Icon icon="it-twitter" />
								</a>
							</li>
						</ul>
					</HeaderSocialsZone>
					<HeaderSearch label="Cerca" iconName="it-search" />
				</HeaderRightZone>
			</HeaderContent>
		</Header>
	);
};
