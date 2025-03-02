import { serverFunction } from "@/utils/serverFunction";

const ServerRoutePage = () => {
	return <div>This is server page {serverFunction()}</div>;
};
export default ServerRoutePage;
