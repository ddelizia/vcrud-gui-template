<div class="panel panel-default">
    <div class="panel-heading">
        <span>
            <h3 class="panel-title display-inline">Search Container</h3>
        </span>

        <!-- Split button -->
        <span class="pull-right">
            Here goes some text
            <select class="form-control-inline">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </span>
    </div>
    <div class="panel-body">
        <div class="row">
            <div class="col-md-3"><h5>h5. Bootstrap heading</h5></div>
            <div class="col-md-3">
                <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select></div>
            <div class="col-md-6">
                <?php
                include "searchString.php";
                ?>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3"><h5>h5. Bootstrap heading</h5></div>
            <div class="col-md-3">
                <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select></div>
            <div class="col-md-6">
                <?php
                include "searchDate.php";
                ?>
            </div>
        </div>

    </div>

</div>