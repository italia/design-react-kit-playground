import { FC } from "react";
import { CompleteValidationForm } from "./ValidationForm";
import { CompleteHeader } from "./components";
import "./App.css";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";

export const App: FC = () => {
	return (
		<div>
			<CompleteHeader />
			<div className="container my-4">
				<h3>Form di esempio con validazione</h3>
				<div className="my-4">
					<CompleteValidationForm />
				</div>
			</div>
		</div>
	);
};

export default App;
