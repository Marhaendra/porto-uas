import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Beranda from "../../page/beranda";
import Portofolio from '../../page/portofolio';
import About from '../../page/about';

export default function Router(){
	return(
		<Switch>
			<Route exact path="/" component={Beranda} />
			<Route path="/portofolio" component={Portofolio} />
			<Route path="/about" component={About}/>
		</Switch>
	)
}