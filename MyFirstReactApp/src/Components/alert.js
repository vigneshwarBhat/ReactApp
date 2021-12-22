import React from 'react';
import { getAlertState } from '../Reducers/alertReducer';
import { useState } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
export default function ShowAlert() {
	const alert = useSelector(getAlertState);
	const [show, setShow] = useState(true);

	if (show && alert.message) {
		return (
			<Row>
				<Col></Col>
				<Col>
					<Alert
						variant={alert.type}
						onClose={() => setShow(false)}
						dismissible
					>
						<Alert.Heading>{alert.message}</Alert.Heading>
					</Alert>
				</Col>
				<Col></Col>
			</Row>
		);
	}
	return <></>;
}
