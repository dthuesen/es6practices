export const project = {
  projectId: 99
};

export function showProject() {
  console.log('in original');
}
export function updateFunction() {
  showProject = function() {
    console.log('in updated')
  }
}

export const projectName = 'BuildIt';




// console.log('in module1')