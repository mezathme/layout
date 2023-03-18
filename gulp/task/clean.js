import { deleteAsync } from 'del'

const clean = () => {
	return deleteAsync(app.path.clean)
}

export default clean
