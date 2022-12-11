import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const queryParamsContainter = document.querySelector('[data-query-params]')
const queryHeaderContainter = document.querySelector('[data-request-headers]')
const keyValueTemplate = document.querySelector('[data-key-value-template]')

document.querySelector('[data-add-query-param-btn]').addEventListener('click', (e) => {
  queryParamsContainter.append(createKeyValuePair())
})

queryParamsContainter.append(createKeyValuePair())

function createKeyValuePair() {
  const element = keyValueTemplate.content.cloneNode(true)
  element.querySelector('[data-remove-btn]').addEventListener('click', (e) => {
    e.target.closest('[data-key-value-pair]').remove()
  })
  return element
}
