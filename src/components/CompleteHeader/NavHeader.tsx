import { FC, useState } from "react";
import {
	Collapse,
	Row,
	Col,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	Header,
	HeaderContent,
	HeaderToggler,
	Icon,
	LinkList,
	LinkListItem,
	Nav,
	NavItem,
	NavLink,
	MegamenuItem,
	MegamenuHighlightColumn
} from "design-react-kit";

type Props = any;

export const NavHeader: FC<Props> = ({ props }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(isOpen => !isOpen);
	};

	return (
		<Header type="navbar" theme={props?.theme}>
			<HeaderContent expand="lg" megamenu>
				<HeaderToggler onClick={toggle} aria-controls="nav1" aria-expanded="false" aria-label="Toggle navigation">
					<Icon icon="it-burger" />
				</HeaderToggler>
				<Collapse isOpen={isOpen} navbar header onOverlayClick={toggle}>
					<div className="menu-wrapper">
						<Nav navbar>
							<NavItem active>
								<NavLink href="#" active>
									<span>link 1 active </span>
									<span className="visually-hidden">current</span>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#" disabled>
									Link 2
								</NavLink>
							</NavItem>
							<Dropdown inNavbar tag="li">
								<DropdownToggle inNavbar caret>
									<span>Menu Dropdown</span>
								</DropdownToggle>
								<DropdownMenu>
									<LinkList>
										<LinkListItem inDropdown href="#">
											<span>Link list 1</span>
										</LinkListItem>
										<LinkListItem inDropdown href="#">
											<span>Link list 2</span>
										</LinkListItem>
										<LinkListItem inDropdown href="#">
											<span>Link list 3</span>
										</LinkListItem>
										<LinkListItem inDropdown href="#">
											<span>Link list 4</span>
										</LinkListItem>
									</LinkList>
								</DropdownMenu>
							</Dropdown>
							<MegamenuItem itemName="Megamenu completo">
								<Row>
									<MegamenuHighlightColumn xs="12" lg="4" description>
										<div className="ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded">
											<figure className="figure">
												<img
													src="https://via.placeholder.com/560x240/ebebeb/808080/?text=Immagine"
													className="figure-img img-fluid rounded"
													alt="Segnaposto"
												/>
											</figure>
										</div>
										<p>Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
									</MegamenuHighlightColumn>
									<Col xs="12" lg="8">
										<div className="it-heading-link-wrapper">
											<a className="it-heading-link" href="#">
												<Icon className="icon icon-sm me-2 mb-1" icon="it-arrow-right-triangle"></Icon>
												<span>Esplora la sezione megamenu</span>
											</a>
										</div>
										<Row>
											<Col xs="12" lg="6">
												<LinkList>
													<LinkListItem inDropdown href="#">
														<Icon className="me-2" color="primary" icon="it-arrow-right-triangle" size="xs" />
														<span>Link lista 1</span>
													</LinkListItem>
													<LinkListItem inDropdown href="#">
														<Icon className="me-2" color="primary" icon="it-arrow-right-triangle" size="xs" />
														<span>Link lista 2</span>
													</LinkListItem>
													<LinkListItem inDropdown href="#">
														<Icon className="me-2" color="primary" icon="it-arrow-right-triangle" size="xs" />
														<span>Link lista 3</span>
													</LinkListItem>
												</LinkList>
											</Col>
											<Col xs="12" lg="6">
												<LinkList>
													<LinkListItem inDropdown href="#">
														<Icon className="me-2" color="primary" icon="it-arrow-right-triangle" size="xs" />
														<span>Link lista 4</span>
													</LinkListItem>
													<LinkListItem inDropdown href="#">
														<Icon className="me-2" color="primary" icon="it-arrow-right-triangle" size="xs" />
														<span>Link lista 5</span>
													</LinkListItem>
													<LinkListItem inDropdown href="#">
														<Icon className="me-2" color="primary" icon="it-arrow-right-triangle" size="xs" />
														<span>Link lista 6</span>
													</LinkListItem>
												</LinkList>
											</Col>
										</Row>
									</Col>
								</Row>
							</MegamenuItem>
						</Nav>
					</div>
				</Collapse>
			</HeaderContent>
		</Header>
	);
};
