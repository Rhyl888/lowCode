import { Allotment } from 'allotment';
import 'allotment/dist/style.css';
import React from 'react';
import Header from './header';
import Material from './material';
import Setting from './setting';
import Stage from './stage';
import { useComponetsStore } from '../stores/components';
import ProdStage from './stage/prod';

const Layout: React.FC = () => {
	const { mode } = useComponetsStore();
	return (
		<div className="h-[100vh] flex flex-col">
			<div className="h-[50px] flex items-center bg-red-300">
				<Header />
			</div>
			{mode === 'edit' ? (
				<Allotment>
					<Allotment.Pane preferredSize={200} maxSize={400} minSize={200}>
						<Material />
					</Allotment.Pane>
					<Allotment.Pane>
						<Stage />
					</Allotment.Pane>
					<Allotment.Pane preferredSize={300} maxSize={500} minSize={300}>
						<Setting />
					</Allotment.Pane>
				</Allotment>
			) : (
				<ProdStage />
			)}
		</div>
	);
};

export default Layout;
