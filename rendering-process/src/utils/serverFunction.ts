import "server-only";

export function serverFunction() {
	console.log("I am coming from server function");
	return "Hello From Utils";
}
