- [ ] Why would you use class component over function components (removing hooks from the question)?
If you need to use lifestyle methods for which there is no hook, such as shouldComponentUpdate() or getSnapshotBeforeUpdate().
- [ ] Name three lifecycle methods and their purposes.
componentDidMount() is to run something after the component is mounted (such as a fetch). componentDidUpdate() is for running something after an update or state change (similar to useEffect dependency array). And componentWillUnmount() is used before the compponent is unmounted (for cleaup).
- [ ] What is the purpose of a custom hook?
Custom hooks allow you to abstract stateful logic, such as handleSubmit, handleChanges methods. Instead of putting these methods inside each component, you can store them in a custom hook and then call them in any component that needs them.
- [ ] Why is it important to test our apps?
So that everything in your app doesn't have to be manually checked by the developer. Testing allows you to automate the repetitive, manual nature of checking if everything is working properly.