<?php

namespace Jobcerto\VueComponent;

use Laravel\Nova\Fields\Field;

class VueComponent extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'vue-component';

    public function props(array $props)
    {
      return $this->withMeta(['props' => $props]);
    }

    public function resource($resource)
    {
      return $this->withMeta(['resource' => $resource->model()]);
    }
}
