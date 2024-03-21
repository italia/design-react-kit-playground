import { FC, useState } from "react";
import {
	Button,
	Collapse,
	Row,
	Col,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	Header,
	HeaderContent,
	HeaderRightZone,
	HeaderToggler,
	HeaderLinkZone,
	Icon,
	LinkList,
	LinkListItem,
	HeaderBrand
} from "design-react-kit";

type Props = any;

export const SlimHeader: FC<Props> = ({ props }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(isOpen => !isOpen);
	};

	return (
		<Header type="slim" theme={props?.theme}>
			<HeaderContent>
				<HeaderBrand>Ente appartenenza</HeaderBrand>
				<HeaderLinkZone>
					<HeaderToggler onClick={toggle}>
						<span>Ente appartenenza</span>
						<Icon icon="it-expand" />
					</HeaderToggler>
					<Collapse isOpen={isOpen}>
						<LinkList>
							<LinkListItem href="#">Link 1</LinkListItem>
							<LinkListItem href="#" active>
								Link 2 (Active)
							</LinkListItem>
						</LinkList>
					</Collapse>
				</HeaderLinkZone>
				<HeaderRightZone>
					<Dropdown inNavbar>
						<DropdownToggle inNavbar caret>
							ITA
						</DropdownToggle>
						<DropdownMenu>
							<Row>
								<Col size="12">
									<LinkList>
										<LinkListItem inDropdown href="#">
											<span>ITA</span>
										</LinkListItem>
										<LinkListItem inDropdown href="#">
											<span>ENG</span>
										</LinkListItem>
									</LinkList>
								</Col>
							</Row>
						</DropdownMenu>
					</Dropdown>
					<div className="it-access-top-wrapper">
						<Button color="primary" size="sm">
							Accedi
						</Button>
					</div>
				</HeaderRightZone>
			</HeaderContent>
		</Header>
	);
};
