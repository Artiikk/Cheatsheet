// Liskov substitution principle


// Принцип подстановки Барбары Лисков
// Необходимо, чтобы подклассы могли бы служить заменой для своих суперклассов.
// Цель этого принципа заключаются в том, чтобы классы-наследники могли бы использоваться вместо родительских классов,
// от которых они образованы, не нарушая работу программы.
// Если оказывается, что в коде проверяется тип класса, значит принцип подстановки нарушается.


// class Person {
//
// }
//
// class Member extends Person {
//   access() {
//     console.log('У тебя есть доступ')
//   }
// }
//
// class Guest extends Person {
//   isGuest = true
// }
//
// class Frontend extends Member {
//   canCreateFrontend() {}
// }
//
// class Backend extends Member {
//   canCreateBackend() {}
// }
//
// class PersonFromDifferentCompany extends Guest {
//   access() {
//     throw new Error('У тебя нет доступа! Иди к себе!')
//   }
// }
//
// function openSecretDoor(member) {
//   member.access()
// }
//
// openSecretDoor(new Frontend())
// openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany())  // There should be member!

// ===============

class Component {
  isComponent = true
}

class ComponentWithTemplate extends Component {
  render() {
    return `<div>Component</div>`
  }
}

class HigherOrderComponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate {
  onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
  afterInit() {}
}

class HOC extends HigherOrderComponent {
  wrapComponent(component) {
    component.wrapped = true
    return component
  }
}

function renderComponent(component) {
  console.log(component.render())
}


renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())
